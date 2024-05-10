
import css from "./LoadMoreBtn.module.css";
import { Image } from "../../types";
type LoadMoreBtnProps = {
 
 
  loadMore: () => void;
  images: Image[]
}

export const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ loadMore, images }) => {
  return (
    <div className={css.btnContainer}>
    //       {images.length > 0 && (
            <button className={css.loadMoreBtn} onClick={loadMore} type="button">
              Load more
            </button>
          )}
        </div>
  );
};
export default LoadMoreBtn


// import css from "./LoadMoreBtn.module.css";
// import { Image } from "../../types";

// interface Btn {
//   loadMore: () => void;
//   images: Image[]
// }

// const LoadMoreBtn: React.FC<Btn> = ({ loadMore, images }) => {
//   return (
//     <div className={css.btnContainer}>
//       {images.length > 0 && (
//         <button className={css.loadMoreBtn} onClick={loadMore} type="button">
//           Load more
//         </button>
//       )}
//     </div>
//   );
// };

// export default LoadMoreBtn;