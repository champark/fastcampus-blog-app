import { Link } from "react-router-dom"

export default function PostDetail() {
    return <>
        <div className="post__detail">
            <div className="post__box">
                <div className="post__title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">패스트캠퍼스</div>
                    <div className="post__date">2023.12.10 일요일</div>
                </div>
                <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">
                        <Link to={`/posts/edit/1`}>수정</Link>
                    </div>
                </div>
                <div className="post__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit leo eget lectus vehicula scelerisque. Ut egestas semper odio quis malesuada. Sed sit amet nisi mollis, faucibus ligula a, viverra libero. Cras ullamcorper sem eget elit porta ullamcorper. Mauris venenatis pretium risus sed tristique. Praesent varius sollicitudin varius. Fusce odio dui, feugiat in efficitur ultricies, luctus nec enim. Nulla faucibus ex libero, nec rutrum urna eleifend a. Quisque ac dignissim velit, et venenatis nunc.
                </div>
            </div>
        </div>
    </>
}