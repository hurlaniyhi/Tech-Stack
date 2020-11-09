// whenever you want which to import many things from a file, you use export but if you want to import a particular
// thing you use export default

export const selectLibrary = (libraryId) => {
    return {
        type: 'select_library',
        payload: libraryId
    }
}