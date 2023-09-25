// Dynamic metadata
export async function generateMetadata(){

    // SEO Data Fetch
    return {
      title: 'Team',
    //   description: 'A Agency Website with NextJs 13 - SEO Friendly & REST API',
    }
  
}

const Layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Layout;