import React, {Fragment, memo, useMemo} from 'react';
import {Menu, Transition} from "@headlessui/react";
import {BsChevronDown} from "react-icons/bs";
import classNames from "classnames";


interface IDropdownItem {
    text: string;
    Icon?: any;
    onClick?: any;
    group?: number;
}

interface DropdownProps {
    title: string;
    items: IDropdownItem[];
}

interface DropdownWithGroupsProps {
    title: string;
    groups: {
        [key: number]: IDropdownItem[];
    };
}

const DropdownItem: React.FC<{item: IDropdownItem}> = memo(({item}) => {
    return (
        <Menu.Item>
            {({active}) => (
                <button
                    className={classNames(
                        active ? 'bg-red-500 text-white' : 'text-gray-900',
                        'group flex w-full items-center rounded-md px-2 py-2 text-sm gap-2'
                    )}
                    onClick={item.onClick}
                >
                    {item.Icon && <item.Icon />}

                    {item.text}
                </button>
            )}
        </Menu.Item>
    );
});

export const DoubleDropdown: React.FC<DropdownProps | DropdownWithGroupsProps> = ({
                                                                                title = 'Options',
                                                                                ...props
                                                                            }) => {

    // Make one group from non-grouped items list
    const groups: { [key: string]: IDropdownItem[] } = useMemo(() => {
        if ('groups' in props) return props.groups;
        else return {1: props.items} as any;
    }, []);

    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button
                    className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    {title}
                    <BsChevronDown
                        className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                        aria-hidden="true"
                    />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className={classNames(
                        "z-10 shadow-lg absolute right-0 mt-2 origin-top-right divide-x divide-gray-200 rounded-md bg-white ring-2 ring-black/5 focus:outline-none",
                        "w-72 grid grid-cols-2 ",
                    )}
                >
                    {/* Iterate groups */}
                    {Object.values(groups).map((items, i) => (
                        <div className="px-1 py-1" key={i}>

                            {/* Iterate group items */}
                            {items.map((item, i) => (
                                <DropdownItem key={item.text + i} item={item}/>
                            ))}

                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    );
}