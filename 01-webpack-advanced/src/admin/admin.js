import { ADMIN_TITLE, adminFunction } from "./admin";
import { times } from "lodash";

const adminTitle = document.querySelector('.secondary_title');

document.addEventListener("DOMContentLoaded", () => {
    adminTitle.innerHTML = ADMIN_TITLE;
    adminFunction();

    times(5, () => console.log('admin'));
});
