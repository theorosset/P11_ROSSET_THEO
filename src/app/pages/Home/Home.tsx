import Header from '../../Component/Header/Header';
import Banniere from '../../Component/Banniere/Banniere';
import ArticleList from '../../Component/Article/ArticleList';  
import { FC } from 'react';

const  App: FC = () => {
  return (
    <div className="container__home">
          <Header />
          <Banniere isHome={true}/>
          <div>
            <ArticleList />
          </div>
    </div>
  );
}

export default App;