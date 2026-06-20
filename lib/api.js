import fs from 'fs';
import path from 'path';

export function getAllMarkdownFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllMarkdownFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      if (file.endsWith('.md')) {
        const fullPath = path.join(dirPath, file);
        arrayOfFiles.push(fullPath);
      }
    }
  });

  return arrayOfFiles;
}

export function getLectures() {
  const lecturesDir = path.join(process.cwd(), 'public', 'Lectures_markdown');
  const files = getAllMarkdownFiles(lecturesDir);
  
  return files.map(file => {
    const relativePath = path.relative(lecturesDir, file);
    const slug = relativePath.replace(/\.md$/, '').split(path.sep);
    
    let title = path.basename(file, '.md');
    // If the file is inside any subfolder, use the immediate parent folder name
    if (slug.length > 1) {
      title = slug[slug.length - 2];
    }
    
    return {
      slug,
      title,
      fullPath: file
    };
  });
}

export function getLectureBySlug(slugArray) {
  const decodedSlug = slugArray.map(s => decodeURIComponent(s));
  const lecturesDir = path.join(process.cwd(), 'public', 'Lectures_markdown');
  const filePath = path.join(lecturesDir, ...decodedSlug) + '.md';
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    let title = path.basename(filePath, '.md');
    if (decodedSlug.length > 1) {
      title = decodedSlug[decodedSlug.length - 2];
    }
    return {
      title,
      content
    };
  }
  return null;
}

export function getQuestions() {
  const questionsDir = path.join(process.cwd(), 'public', 'Questions');
  const files = getAllMarkdownFiles(questionsDir);
  
  return files.map(file => {
    const relativePath = path.relative(questionsDir, file);
    const slug = relativePath.replace(/\.md$/, '').split(path.sep);
    
    let title = path.basename(file, '.md');
    if (slug.length > 1) {
      title = slug[slug.length - 2];
    }
    
    return {
      slug,
      title,
      fullPath: file
    };
  });
}

export function getQuestionBySlug(slugArray) {
  const decodedSlug = slugArray.map(s => decodeURIComponent(s));
  const questionsDir = path.join(process.cwd(), 'public', 'Questions');
  const filePath = path.join(questionsDir, ...decodedSlug) + '.md';
  
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    let title = path.basename(filePath, '.md');
    if (decodedSlug.length > 1) {
      title = decodedSlug[decodedSlug.length - 2];
    }
    return {
      title,
      content
    };
  }
  return null;
}
