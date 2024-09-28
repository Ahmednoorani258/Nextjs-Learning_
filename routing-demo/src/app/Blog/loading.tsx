export default function Loading(){
    return(
        <h1>Loading...</h1>
    )
}

/* loading.tsx benefits

1. You can display the loading state  as soon as a user  navigates to a new route 

2. next js allows the creation of shared layout  that remains interactive while new route segments are loading 

3. users can continue interacting with certain path os applicatio like navigation menu or side bar  even if the main content is still loading or bienf fetched */