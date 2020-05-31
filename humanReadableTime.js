function humanReadable(seconds) {
  if (seconds > 3600) {
    // Hitung dibagi jam
    let jam = Math.floor(seconds / 3600);
    let menit = Math.floor((seconds - jam * 3600) / 60);
    let detik = Math.floor(seconds - menit * 60 - jam * 3600);
    return `${jam.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${menit.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${detik.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  } else if (seconds < 3600) {
    // Hitung dibagi menit
    let menit = Math.floor(seconds / 60);
    let detik = Math.floor(seconds - menit * 60);
    return `00:${menit.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}:${detik.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  } else if (seconds < 60) {
    return `00:00:${seconds.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    })}`;
  }
}

console.log(humanReadable(0), "00:00:00", "humanReadable(0)");
console.log(humanReadable(5), "00:00:05", "humanReadable(5)");
console.log(humanReadable(60), "00:01:00", "humanReadable(60)");
console.log(humanReadable(86399), "23:59:59", "humanReadable(86399)");
console.log(humanReadable(359999), "99:59:59", "humanReadable(359999)");
