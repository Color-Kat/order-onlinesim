import React, {memo} from "react";
import {Features} from "@UI/Features";
import {H3} from "@UI/Typography";
import {BsBrightnessHigh, BsLightningCharge, BsPerson, BsStackOverflow, BsTicketPerforated} from "react-icons/bs";
import {HiOutlineSquare3Stack3D} from "react-icons/hi2";

interface HeroSectionProps {

}

// https://floatui.com/components/feature-sections
export const FeaturesSection: React.FC<HeroSectionProps> = memo(({}) => {

    const features = [
        {
            Icon: BsLightningCharge,
            title: "24/7 Service",
            description: "We offer real phone numbers 24/7 to receive SMS from almost all over the world and are one of the most reliable services in this area."
        },
        {
            Icon: BsPerson,
            title: "Create accounts",
            description: "You can create an account for any service and application using our service."
        },
        {
            Icon:
                () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>,
            title: "Easy to use",
            description: "An interface that is understandable even for an inexperienced user makes it easy and quick to purchase a mobile number."
        },

        {
            Icon: BsTicketPerforated,
            title: "Discounts",
            description: "Get discounts for large volumes of using our service."
        },
    ];

    return (
        <section className="">
            <div className="page-container">
                <H3 className="mb-5 text-slate-300">Our advantages:</H3>

                <Features features={features} />
            </div>
        </section>
    );
});