import { AnimatePresence } from "framer-motion";
import SmoothAppearance from "../../ui/SmoothAppearance";
import Navigation from "./Navigation";
import Information from "./Forms/Information";
import Delivery from "./Forms/Delivery";
import Payment from "./Forms/Payment";
import Bought from "./Bought";
import { useState } from "react";
export default function OrderTabs({ setIsBought }) {

    const [activeTab, setActiveTab] = useState("information");

    const renderTabContent = () => {
        switch (activeTab) {
            case "information":
                return <Information setActiveTab={setActiveTab} key={"information"} />;
            case "delivery":
                return <Delivery setActiveTab={setActiveTab} key={"delivery"} />;
            case "payment":
                return (
                    <Payment
                        setIsBought={setIsBought}
                        setActiveTab={setActiveTab}
                        key={"payment"}
                    />
                );
            case "bought":
                return <Bought key={"bought"} />;
            default:
                return null;
        }
    };

    return (
        <AnimatePresence mode="wait" initial={false}>
            {activeTab !== "bought" ? (
                <SmoothAppearance key={"main-tabs"}>
                    <Navigation activeTab={activeTab} />
                    <AnimatePresence mode="wait">{renderTabContent()}</AnimatePresence>
                </SmoothAppearance>
            ) : (
                <Bought />
            )}
        </AnimatePresence>
    );
}
