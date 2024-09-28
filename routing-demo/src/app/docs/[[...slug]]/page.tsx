export default function Docs({ params }: { params: { slug: string[] } }) {
  //we use optional chaining bcs of catch all sehment scenariio bcs it takes array and if we want to show else block so we need to make slug name folder named with nested arr [[..slug]] like this and make the param optional
  if (params.slug?.length === 1) {
    return <h1>Viewing docs for Feature {params.slug[0]}</h1>;
  } else if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for Feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 3) {
    return <h1>Your name is {params?.slug[2]}</h1>;
  } else {
    return <h1>Docs Home Page</h1>;
  }
}
