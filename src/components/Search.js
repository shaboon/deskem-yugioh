export default function search() {
  async function result() {
    await axios.get(
      `https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${cardName}`
    );

    const foundCard = array.array.forEach((then) => {
      document.createElement("div");
      foundCard.setAttribute("dragable", "true");
      foundCard.setAttribute("class", "dragable");
    });
  }

  return (
    <div>
      <div className="">
        <input type="text" placeholder="Search for a card"></input>
        <button>Search</button>
      </div>
      <div className="hamburger"></div>
      <div className="search-result dragable"></div>
    </div>
  );
}
