import { createRef } from "react";
import { proxy } from "valtio";

const state = proxy({
    isMenuOpen: false,
    isVisible: false,
    sections: 3,
    pages: 3,
    zoom: 1,
    top: createRef(),
})

export default state;