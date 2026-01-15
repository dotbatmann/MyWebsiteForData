// app.js
const supabaseUrl = 'https://czoosafzcyjmrqswkeco.supabase.co';
const supabaseAnonKey = 'sb_publishable_ErwUKI6fRLv72oPmzczKtw_M9ZMc2W2';
const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

document.getElementById('uploadBtn').addEventListener('click', async () => {
  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];
  if (!file) return alert("Select a file first.");

  const { data, error } = await supabase.storage
    .from('passwords')
    .upload(file.name, file, { upsert: true });

  if (error) alert("Upload failed: " + error.message);
  else alert("File uploaded successfully!");
});
