// ...new file...
const STORIES_KEY = 'safarnama_stories';

function readStories() {
  const raw = localStorage.getItem(STORIES_KEY);
  return raw ? JSON.parse(raw) : [];
}
function writeStories(list) {
  localStorage.setItem(STORIES_KEY, JSON.stringify(list));
}

export function saveStory({ title, content, authorEmail }) {
  const stories = readStories();
  const story = {
    id: Date.now().toString(),
    title,
    content,
    authorEmail,
    createdAt: new Date().toISOString(),
  };
  stories.unshift(story);
  writeStories(stories);
  return story;
}

export function getStoriesByUser(email) {
  if (!email) return [];
  return readStories().filter(s => s.authorEmail === email);
}

export function deleteStory(id, email) {
  const stories = readStories();
  const filtered = stories.filter(s => !(s.id === id && s.authorEmail === email));
  writeStories(filtered);
  return filtered;
}