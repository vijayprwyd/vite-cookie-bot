import { Suspense, lazy, useEffect } from "react";
import { Route, Routes, Link, BrowserRouter } from "react-router-dom";

const MarkdownEditorPage = lazy(() => import("./MarkdownEditor"));

function App() {

    useEffect(() => {
      const script = document.createElement('script');
  
      script.id = 'Cookiebot';
      script.src = 'https://consent.cookiebot.com/uc.js';
      script.type = 'text/javascript';
      script.async = true;
  
      script.setAttribute('data-cbid', '123');
      script.setAttribute('data-blockingmode', 'auto');

      document.head.appendChild(script);
  
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/markdown/new"
          element={
            <Suspense
              fallback={
                <div>Fallback content always rendered in produciton build</div>
              }
            >
              <MarkdownEditorPage />
            </Suspense>
          }
        />
        <Route
          path="/"
          element={<Link to="/markdown/new">Go to markdown page</Link>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
