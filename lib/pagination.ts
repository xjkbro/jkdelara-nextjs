
export function currentPageSetup(searchParams): any {
    let currentPage = 1;
    if (searchParams?.page)
        currentPage = searchParams?.page
    return currentPage;
}