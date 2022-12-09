import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import SellCard from "../Sell/SellCard"


const SellFilter = () => {
    const [propertyOpen, setPropertyOpen] = React.useState(true);
    const [utilityOpen, setUtilityOpen] = React.useState(true);
    const [featureOpen, setFeatureOpen] = React.useState(true);
    const [constructionOpen, setConstructionOpen] = React.useState(true);
    const [marlaOpen, setMarlaOpen] = React.useState(true);
    const [bedOpen, setBedOpen] = React.useState(true);
    const [bathOpen, setBathOpen] = React.useState(true);
    const [priceOpen, setPriceOpen] = React.useState(true);

    const handleClickProperty = () => {
        setPropertyOpen(!propertyOpen);
    };

    const handleClickUtility = () => {
        setUtilityOpen(!utilityOpen);
    };

    const handleClickFeature = () => {
        setFeatureOpen(!featureOpen);
    };

    const handleClickConstruction = () => {
        setConstructionOpen(!constructionOpen);
    };

    const handleClickMarla = () => {
        setMarlaOpen(!marlaOpen);
    };

    const handleClickBed = () => {
        setBedOpen(!bedOpen);
    };

    const handleClickBath = () => {
        setBathOpen(!bathOpen);
    };

    const handleClickPrice = () => {
        setPriceOpen(!priceOpen);
    };

    return (
        <div class="content mt-[70px] flex w-full gap-[20px] px-[15px] xs:px-[30px] sm:mt-[85px] md:mt-[100px] lg:mt-[120px] xl:mt-[150px] xl:px-[40px] 2xl:mt-[170px] 2xl:gap-[50px]">
            <div class="mb-24 hidden w-[300px] border-r-[1px] border-[#CCCCCC] pr-[20px] filter lg:block xl:w-[350px] 2xl:w-[460px] 2xl:pr-[30px]">
                <div>
                    <div class="flex cursor-pointer select-none items-center justify-between rounded-[11px] border-2 border-accentRed px-[40px] py-[10px]">
                        <h2 class="font-bold text-accentRed 2xl:text-[34px]">
                            Advanced Filters
                        </h2>
                        <img src="/src/assets/icons/filter-variant.png" alt="" />
                    </div>
                    <div class="mt-[60px] flex flex-col hover:bg-none">


                        {/* Filter List Starts from here*/}
                        {/* Filter#1 */}

                        <List sx={{ width: "100%" }}>
                            <ListItemButton onClick={handleClickProperty}>
                                <ListItemText
                                    primary="Type of Property"
                                    primaryTypographyProps={{ fontSize: "23px", fontFamily: "" }}
                                />
                                {!propertyOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!propertyOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="residential"
                                            id="residential"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="residential" className="ml-5 text-[23px]">
                                            Residential
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="plot"
                                            id="plot"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="plot" className="ml-5 text-[23px]">
                                            Plot
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="commercial"
                                            id="commercial"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="commercial" className="ml-5 text-[23px]">
                                            commercial
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#2 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickUtility}>
                                <ListItemText
                                    primary="Utilities"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!utilityOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!utilityOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="electricity"
                                            id="electricity"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="electricity" className="ml-5 text-[23px]">
                                            Electricity
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="gas"
                                            id="gas"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="gas" className="ml-5 text-[23px]">
                                            Gas
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="water"
                                            id="water"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="water" className="ml-5 text-[23px]">
                                            Water
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="maintenance"
                                            id="maintenance"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="maintenance" className="ml-5 text-[23px]">
                                            Maintenance
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#3 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickFeature}>
                                <ListItemText
                                    primary="Features"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!featureOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!featureOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="central-heating"
                                            id="central-heating"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="central-heating" className="ml-5 text-[23px]">
                                            Central Heating
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="lawn"
                                            id="lawn"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="lawn" className="ml-5 text-[23px]">
                                            Lawn
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="water"
                                            id="water"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="water" className="ml-5 text-[23px]">
                                            Water
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="parking-space"
                                            id="parking-space"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="parking-space" className="ml-5 text-[23px]">
                                            Parking Space
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="furnished"
                                            id="furnished"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="furnished" className="ml-5 text-[23px]">
                                            Furnished
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#4 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickConstruction}>
                                <ListItemText
                                    primary="Construction State"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!constructionOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!constructionOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="finished"
                                            id="finished"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="finished" className="ml-5 text-[23px]">
                                            Finished
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="grey-strucutre"
                                            id="grey-strucutre"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="grey-strucutre" className="ml-5 text-[23px]">
                                            Grey Strucutre
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="house"
                                            id="house"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="house" className="ml-5 text-[23px]">
                                            House
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="flat"
                                            id="flat"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="flat" className="ml-5 text-[23px]">
                                            Flat
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="farm-house"
                                            id="farm-house"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="farm-house" className="ml-5 text-[23px]">
                                            Farm House
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="penthouse"
                                            id="penthouse"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="penthouse" className="ml-5 text-[23px]">
                                            Penthouse
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#5 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickMarla}>
                                <ListItemText
                                    primary="Marla/Kanal"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!marlaOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!marlaOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="less-than-five"
                                            id="less-than-five"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="less-than-five" className="ml-5 text-[23px]">
                                            {"<"} 5 Marla
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="five-to-ten"
                                            id="five-to-ten"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="five-to-ten" className="ml-5 text-[23px]">
                                            {">"} 5 Marla - 10 Marla
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="ten-to-twenty"
                                            id="ten-to-twenty"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="ten-to-twenty" className="ml-5 text-[23px]">
                                            {">"} 10 Marla - 20 Marla
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="twenty-to-kanal"
                                            id="twenty-to-kanal"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="twenty-to-kanal" className="ml-5 text-[23px]">
                                            {">"} 20 Marla - 1 Kanal
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="one-to-five-kanal"
                                            id="one-to-five-kanal"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="one-to-five-kanal" className="ml-5 text-[23px]">
                                            {">"} 1 Kanal - 5 Kanal
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="five-to-twenty"
                                            id="five-to-twenty"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="five-to-twenty" className="ml-5 text-[23px]">
                                            {">"} 5 Kanal - 20 Kanal
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="more-than-twenty"
                                            id="more-than-twenty"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="fmore-than-twenty" className="ml-5 text-[23px]">
                                            {">"} 20 Kanal
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#6 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickBed}>
                                <ListItemText
                                    primary="Bed"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!bedOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!bedOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="two-bed"
                                            id="two-bed"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="two-bed" className="ml-5 text-[23px]">
                                            {"<"} 2 Beds
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="three-beds"
                                            id="three-beds"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="three-beds" className="ml-5 text-[23px]">
                                            {">"} 3 Beds
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="four-beds"
                                            id="four-beds"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="four-beds" className="ml-5 text-[23px]">
                                            {">"} 4 Beds
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="studio"
                                            id="studio"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="studio" className="ml-5 text-[23px]">
                                            Studio
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#6 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickBath}>
                                <ListItemText
                                    primary="Bath"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!bathOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!bathOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="greater-than-two"
                                            id="greater-than-two"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="greater-than-two" className="ml-5 text-[23px]">
                                            {"<"} 2 Bath
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="three-bath"
                                            id="three-bath"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="three-bath" className="ml-5 text-[23px]">
                                            {">"} 3 Bath
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="four-bath"
                                            id="four-bath"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="four-bath" className="ml-5 text-[23px]">
                                            {">"} 4 Bath
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="less-than-6"
                                            id="less-than-6"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="less-than-6" className="ml-5 text-[23px]">
                                            {"<"} 6 Bath
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>

                        {/* Filter#7 */}
                        <List sx={{ width: "100%", ":hover": {}, mt: 2 }}>
                            <ListItemButton onClick={handleClickPrice}>
                                <ListItemText
                                    primary="Price Range"
                                    primaryTypographyProps={{ fontSize: "23px" }}
                                />
                                {!priceOpen ? (
                                    <ExpandLess fontSize="large" />
                                ) : (
                                    <ExpandMore fontSize="large" />
                                )}
                            </ListItemButton>
                            <Collapse in={!priceOpen} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="greater-than-1lac"
                                            id="greater-than-1lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="greater-than-1lac" className="ml-5 text-[23px]">
                                            {">"} 1 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="one-to-five-lac"
                                            id="one-to-five-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="one-to-five-lac" className="ml-5 text-[23px]">
                                            {">"} 1 Lac - 5 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="five-to-ten-lac"
                                            id="five-to-ten-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="five-to-ten-lac" className="ml-5 text-[23px]">
                                            {">"} 5 Lac - 10 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="ten-to-twenty-lac"
                                            id="ten-to-twenty-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="ten-to-twenty-lac" className="ml-5 text-[23px]">
                                            {">"} 10 Lac - 20 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="twenty-to-thirty-lac"
                                            id="twenty-to-thirty-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label
                                            for="twenty-to-thirty-lac"
                                            className="ml-5 text-[23px]"
                                        >
                                            {">"} 20 Lac - 30 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="thirty-to-fifty-lac"
                                            id="thirty-to-fifty-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label
                                            for="thirty-to-fifty-lac"
                                            className="ml-5 text-[23px]"
                                        >
                                            {">"} 30 Lac - 50 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="fifty-to-seventy-lac"
                                            id="fifty-to-seventy-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label
                                            for="fifty-to-seventy-lac"
                                            className="ml-5 text-[23px]"
                                        >
                                            {">"} 50 Lac - 70 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="seventy-to-ninty-nine-lac"
                                            id="seventy-to-ninty-nine-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label
                                            for="seventy-to-ninty-nine-lac"
                                            className="ml-5 text-[23px]"
                                        >
                                            {">"} 70 Lac - 90 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>

                                    <ListItemButton sx={{ pl: 4, mt: 2 }}>
                                        <input
                                            type="checkbox"
                                            name="less-than-99-lac"
                                            id="less-than-99-lac"
                                            class="h-[26px] w-[26px] accent-accentRed"
                                        />
                                        <label for="less-than-99-lac" className="ml-5 text-[23px]">
                                            {"<"} 99 Lac
                                        </label>
                                        {/* <ListItemText primary="Starred" /> */}
                                    </ListItemButton>
                                </List>
                            </Collapse>
                        </List>
                    </div>
                </div>
            </div>
            <SellCard />
        </div>
    );
};
export default SellFilter;