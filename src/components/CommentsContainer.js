import React from 'react'
import Comment from './Comment'


const CommentsContainer = () => {
    const CommentsList = ({comments}) =>{
        return(
            <>
                {comments?.map((eachComment)=>{
                    return(
                        <>
                            <Comment data={eachComment}/>
                            <div className='ps-5 border-start ms-5'>
                                <CommentsList comments={eachComment.replies}/>
                            </div>
                        </>
                    )
                })}
            </>
        )
    }
    const commentsData = [
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [],
            },
            {
              name: "Akshay Saini",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Akshay Saini",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Akshay Saini",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [
                            {
                              name: "Akshay Saini",
                              text: "Lorem ipsum dolor sit amet, consectetur adip",
                              replies: [],
                            },
                          ],
                        },
                        {
                          name: "Akshay Saini",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Akshay Saini",
          text: "Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
      ];
      
  return (
    <div style={{width:"63%"}}>
            {/* <Comment data={commentsData}/> */}
            <h3 className='fw-bold'>Comments </h3>
            <CommentsList comments={commentsData}/>
        </div>
  )
}

export default CommentsContainer