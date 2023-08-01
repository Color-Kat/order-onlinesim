import React, {memo} from 'react';
import {TgIcon, VkIcon, YoutubeIcon, YtIcon} from "@UI/Icons/Social";
import {EmailAddress, PhoneNumber} from "@UI/Elements/Contacts";
import {Badge, GoldBadge, GreenBadge, PinkBadge, RedBadge} from "@UI/Badges";

interface RowProps {

}

export const Col2: React.FC<RowProps> = memo(({}) => {
    return (
        <div className="flex items-center justify-center flex-col gap-8">

           <div className="flex gap-2 max-w-xs w-96">
               <VkIcon />
               <div className="flex flex-col justify-between ">
                   <YtIcon className="w-10 h-10"/>
                   <TgIcon className="w-10 h-10"/>
               </div>
               <div className="flex flex-col justify-between ">
                   <YoutubeIcon className="" />
                   <YoutubeIcon className="" dark />
               </div>
           </div>

            <div>
                <PhoneNumber />
                <EmailAddress />
            </div>

            <div className="flex flex-wrap gap-3 bg-white w-full rounded-xl p-3">
                <Badge>Standard</Badge>
                <GreenBadge>Good</GreenBadge>
                <PinkBadge>Great</PinkBadge>
                <RedBadge>Bad</RedBadge>
                <GoldBadge>Brilliant</GoldBadge>
            </div>

        </div>
    );
});