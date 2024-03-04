

async function getData(x) {
    const res = await fetch('https://65cdd5b0c715428e8b3f363d.mockapi.io/chocolot/'+x)
 
    if (!res.ok) {
       throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }

   
  export default async function Page({ params, searchParams }) {
    const data = await getData(params.slug)
    console.log('ist'+data);
    return (
        <main>
            
        </main>
    )
  }