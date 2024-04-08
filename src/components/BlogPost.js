function BlogPost({ Card, title, author, content}) {
  return (
    <>
      <article className="post">
        <header className="post-header">
          <h2 className="post-title">{title}</h2>
          <Card {...author}/>
        </header>
        <div className="post-paragraph">{content}</div>
      </article>  
    </>
  );
};

export default BlogPost;
