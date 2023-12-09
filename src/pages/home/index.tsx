import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <header>
                <div>
                    <Link to="/posts/new">글쓰기</Link>
                    <Link to="/posts">게시글</Link>
                    <Link to="/profile">프로필</Link>
                </div>
            </header>
            <div className="post__navigation">
                <div className="post__navigation--active">전체</div>
                <div>나의 글</div>
            </div>
            <div className="post__list">
                {[...Array(10)].map((e, index) => (
                    <div key={index} className="post__box">
                        <Link to={`/posts/${index}`}>
                            <div className="post__profile-box">
                                <div className="post__profile" />
                                <div className="post__author-name">패스트캠퍼스</div>
                                <div className="post__date">2023.12.10 일요일</div>
                            </div>
                            <div className="post__title">게시글 {index}</div>
                            <div className="post__text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer suscipit leo eget lectus vehicula scelerisque. Ut egestas semper odio quis malesuada. Sed sit amet nisi mollis, faucibus ligula a, viverra libero. Cras ullamcorper sem eget elit porta ullamcorper. Mauris venenatis pretium risus sed tristique. Praesent varius sollicitudin varius. Fusce odio dui, feugiat in efficitur ultricies, luctus nec enim. Nulla faucibus ex libero, nec rutrum urna eleifend a. Quisque ac dignissim velit, et venenatis nunc.
                            </div>
                            <div className="post__utils-box">
                                <div className="post__delete">삭제</div>
                                <div className="post__edit">수정</div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="post__list">Post list</div>
            <footer>
                <Link to="/posts/new">글쓰기</Link>
                <Link to="/posts">게시글</Link>
                <Link to="/profile">프로필</Link>
            </footer>
        </div>
    );
}
