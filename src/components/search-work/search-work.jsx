import './search-work.scss';

const SearchWork = () => {

  const handleSmoothScroll = () => {
    const targetElement = document.querySelector(`#find-work`);
    const rectTop = targetElement.getBoundingClientRect().top;
    const offsetTop = window.pageYOffset;

    const top = offsetTop + rectTop - 50;

    window.scrollTo({
      top,
      behavior: 'smooth'
    })
  }
  
  return (
    <div className = 'search'>
      <div className = 'search__title'> В поисках работы? </div>
      <button className = 'button button__outline search__button' onClick = { handleSmoothScroll }> Найти работу за 1 день </button>
    </div>
  )
}

export default SearchWork;