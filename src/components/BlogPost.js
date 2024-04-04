function BlogPost(props) {
    const Tarjeta = props.tarjeta;

    return (
      <>
        <article className="post">
          <header className="post-header">
            <h2 className="post-title">{props.titulo}</h2>
            <Tarjeta {...props.autor}/>
          </header>
          <div className="post-paragraph">{props.parrafos}</div>
        </article>  
      </>
    );
};

export default BlogPost;