import { createSlice } from "@reduxjs/toolkit";
import persist from "@Store/persist";
const initialState = {
    showModal: false,
    modalContent: null,
    showPromptDialog: false,
    promptDialogContent: null,
    navbarToggled: false,
};
const setCommonState = (state, action) => ({
    ...state,
    ...action.payload,
});
const toggleModal = (state, action) => ({
    ...state,
    showModal: !!action.payload,
    modalContent: action.payload || state.modalContent,
});
const setToggleNavbar = (state, action) => ({
    ...state,
    navbarToggled: action.payload,
});
const setModalContent = (state, action) => ({
    ...state,
    modalContent: action.payload || null,
});
const togglePromptDialog = (state, action) => ({
    ...state,
    showPromptDialog: !!action.payload || !state.showPromptDialog,
    promptDialogContent: action.payload || state.promptDialogContent,
});
const setPromptDialogContent = (state, action) => ({
    ...state,
    promptDialogContent: action.payload || null,
});
const commonSlice = createSlice({
    name: "common",
    initialState,
    reducers: {
        setCommonState,
        toggleModal,
        setModalContent,
        setToggleNavbar,
        togglePromptDialog,
        setPromptDialogContent,
    },
});
export { commonSlice };
export default persist("common", [], commonSlice.reducer);
