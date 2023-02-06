function Blog({ posts }) {
    return (
      <ul>
          <li key={posts.data}>{posts.data}</li>
      </ul>
    )
  }

  export async function getStaticProps() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://meowfacts.herokuapp.com/')
    const posts = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        posts,
      },
    }
  }

/*S
// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external APIS
    const res = await fetch(`https://.../data`)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
  }
*/
  
  export default Blog


// This value is considered fresh for ten seconds (s-maxage=10).
// If a request is repeated within the next 10 seconds, the previously
// cached value will still be fresh. If the request is repeated before 59 seconds,
// the cached value will be stale but still render (stale-while-revalidate=59).
//
// In the background, a revalidation request will be made to populate the cache
// with a fresh value. If you refresh the page, you will see the new value.
/*export async function getServerSideProps({ req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: {},
    }
  }
*/



  