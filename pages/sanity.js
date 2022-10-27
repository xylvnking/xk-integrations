import React from 'react'

import { createClient } from "next-sanity";





export default function sanity({ animals }) {
  return (
      animals &&
    <>
      <header>
        <h1>Sanity + Next.js</h1>
      </header>
      <main>
        <h2>Animals</h2>
        {animals.length > 0 && (
          <ul>
            {animals.map((animal) => (
              <li key={animal._id}>{animal?.name}</li>
            ))}
          </ul>
        )}
        {!animals.length > 0 && <p>No animals to show</p>}
        {animals.length > 0 && (
          <div>
            <pre>{JSON.stringify(animals, null, 2)}</pre>
          </div>
        )}
        {!animals.length > 0 && (
          <div>
            <div>¯\_(ツ)_/¯</div>
            <p>
              Your data will show up here when you've configured everything
              correctly
            </p>
          </div>
        )}
      </main>
    </>
  );
  
}


const client = createClient({
    projectId: "nfmk0mh4",
    dataset: "production",
    apiVersion: "2022-10-27",
    useCdn: false
  });


export async function getStaticProps() {
    const animals = await client.fetch(`*[_type == "animal"]`);
    // const animals = [
    //   {
    //     _createdAt: "2022-03-08T09:28:00Z",
    //     _id: "1f69c53d-418a-452f-849a-e92466bb9c75",
    //     _rev: "xnBg0xhUDzo561jnWODd5e",
    //     _type: "animal",
    //     _updatedAt: "2022-03-08T09:28:00Z",
    //     name: "Capybara"
    //   }
    // ];
  
    return {
      props: {
        animals
      }
    };
  }