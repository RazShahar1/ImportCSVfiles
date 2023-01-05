import { promises as fs } from 'fs'
import data from '..\Desktop\projects\התמחות\project1\importfiles\public'

export default function Import({posts}){
    return(
        <div>Import Componenet
            <div>
                <ul>
                    {posts.map((post)=>(
                        <li>
                            <h3>{post.filename}</h3>
                            <p>{post.content}</p>
                        </li>
                    ))}
                </ul>
            </div>
           
        </div>
    )
}

export async function getStaticProps() {
    const postsDirectory = data.join(process.cwd(), 'posts')
    const filenames = await fs.readdir(postsDirectory)
  
    const posts = filenames.map(async (filename) => {
      const filePath = data.join(postsDirectory, filename)
      const fileContents = await fs.readFile(filePath, 'utf8')})}

      