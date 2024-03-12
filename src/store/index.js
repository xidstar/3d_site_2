/* eslint-disable no-unused-vars */
import { proxy } from "valtio";

const state = proxy({
    isMenuOpen: false,
    isVisible: false,
})

export default state;