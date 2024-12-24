export async function getServerSideProps(context:any) {
    const data = await fetch('https://api.example.com/data').then((res) =>
      res.json()
    );
  
    return {
      props: {
        data,
      },
    };
  }

  export async function getStaticProps() {
    const data = await fetch('https://api.example.com/data').then((res) =>
      res.json()
    );
  
    return {
      props: { data },
      revalidate: 60, // Rebuild every 60 seconds
    };
  }
  
  export async function getStaticProp1s() {
    const data = await fetch('https://api.example.com/data').then((res) =>
      res.json()
    );
  
    return {
      props: {
        data,
      },
    };
  }

export default function PreRendering({data}:any){
    return(
        <div className="flex justify-center items-center min-h-screen ">
            {data.title}
        </div>
    )
}

// Prerendering means generating the HTML of a page in advance, either at build time or on each request. This can significantly improve performance and SEO


// Server-Side Rendering (SSR):

// HTML is generated on the server at request time.
// Use getServerSideProps for data fetching.


// Incremental Static Regeneration (ISR):

// Rebuild static pages in the background after deployment.
// Use the revalidate property:

// Static Generation (SSG):

// HTML is generated at build time.

// Suitable for pages with content that doesn't change often.

// Use getStaticProps for data fetching