export default function checkIfLoading(store, actionsToCheck) {
    return store.loader.actions.some(action => actionsToCheck.includes(action));
}
