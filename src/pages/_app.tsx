import "../css/styles.css";
import { PageTransition } from "next-page-transitions";

const App = ({ Component, pageProps, router }: any) => {
  return (
    <>
      <PageTransition timeout={400} classNames="page-transition">
        <Component {...pageProps} key={router.route} />
      </PageTransition>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
        }
        .page-transition-enter-active {
          opacity: 1;
          transition: opacity 400ms ease-in-out;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity 200ms ease-in-out;
        }
      `}</style>
    </>
  );
};

export default App;
