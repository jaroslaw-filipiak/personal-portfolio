export const state = () => ({
    isMenuHidden: true,
});

export const mutations = {
    toggleMenuVisible(state) {
        state.isMenuHidden = !state.isMenuHidden;
    },
    hideMenu(state) {
        state.isMenuHidden = true;
    },
};
