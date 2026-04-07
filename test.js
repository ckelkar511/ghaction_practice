function add(a, b) {
  return a + b;
}

// Simple test
if (add(2, 2) !== 4) {
  console.error("Test failed ❌");
  process.exit(1); // THIS FAILS CI
} else {
  console.log("Test passed ✅");
}