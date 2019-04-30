import { VISITOR_TITLE, visitorFunction} from "./visitor";
import { times } from "lodash";

const adminTitle = document.querySelector('.secondary_title');

adminTitle.innerHTML = VISITOR_TITLE;

visitorFunction();

times(5, () => console.log('visitor'));
