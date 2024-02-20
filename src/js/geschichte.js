import "./addNavigation";
import "../scss/shared.scss";
import "../scss/geschichte.scss";
import smallBusinessAct from "../images/History/Dwight-D-Eisenhower.jpeg";
import doriot from "../images/History/GeorgesDoriot.jpeg";
import founders from "../images/History/Founders.jpeg";
import lomaPrieta from "../images/History/LomaPrieta.jpeg";
import vacation from "../images/History/vacation.jpeg";
import covid from "../images/History/covid.jpeg";

const smallBusinessActImg = document.querySelector(".small-business-act");
smallBusinessActImg.src = smallBusinessAct;

const doriotImg = document.querySelector(".doriot");
doriotImg.src = doriot;

const foundersImg = document.querySelector(".founders");
foundersImg.src = founders;

const lomaPrietaImg = document.querySelector(".loma-prieta");
lomaPrietaImg.src = lomaPrieta;

const vacationImg = document.querySelector(".vacation");
vacationImg.src = vacation;

const covidImg = document.querySelector(".covid");
covidImg.src = covid;
