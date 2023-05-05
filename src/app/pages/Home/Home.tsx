import Header from '../../Component/header/Header';
import Banniere from '../../Component/banniere/Banniere';
import ArticleList from '../../Component/article/ArticleList';  
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