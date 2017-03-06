    // Creates a array of arrays i.e dividing pins for each Column 
    let Columns = this.props.pins.reduce((cols, val, idx) => {
      const index = idx % this.props.numCol;
      if (typeof cols[index] === 'undefined') {
        cols[index] = [];
      }
      cols[index].push(val);
      return cols;
    }, []).map((pins, i) => {
      return <Column pins={pins} widthStyle={widthStyle} key={i}/>
    });