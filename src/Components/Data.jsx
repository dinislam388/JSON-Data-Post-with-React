const Data = ({datas}) => {
    return (
        <div className="bg">
            <div className="cards">
                {
                    datas.map((data) => (
                        <div className="card">
                        <h2 className="id">ID: {data.id}</h2>
                        <h3>Titile: {data.title}</h3>
                        <p>Description: {data.body}</p>
                        </div>
                    ))
                }
            </div>  

        </div>
    );
};

export default Data;