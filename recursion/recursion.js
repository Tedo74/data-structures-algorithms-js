function countDown(number) {
  if (number <= 0) {
    console.log('All done!');
    return;
  }
  console.log(number);
  number--;
  countDown(number);
  //   console.log('backwards');
}

countDown(5);
