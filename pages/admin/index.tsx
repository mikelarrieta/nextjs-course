import AuthCheck from "../../components/AuthCheck";

export default function AdminPostsPage(props) {
   return (
      <main>
         <AuthCheck>
            <div>Admin page</div>
         </AuthCheck>
      </main>
   )
}
