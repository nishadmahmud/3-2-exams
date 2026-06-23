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

  return arrayOfFiles.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));
}

export function getCourseConfig() {
  const configPath = path.join(process.cwd(), 'course.config.json');
  if (fs.existsSync(configPath)) {
    return JSON.parse(fs.readFileSync(configPath, 'utf8'));
  }
  return null;
}

export function getActiveCourseInfo() {
  const config = getCourseConfig();
  if (!config) return null;
  return config.courses[config.activeCourse];
}

export function getLectures() {
  const courseInfo = getActiveCourseInfo();
  if (!courseInfo) return [];
  const lecturesDir = path.join(process.cwd(), 'public', 'courses', courseInfo.folderName, 'lecture');
  if (!fs.existsSync(lecturesDir)) return [];
  
  const files = getAllMarkdownFiles(lecturesDir);
  
  return files.map(file => {
    const relativePath = path.relative(lecturesDir, file);
    const slug = relativePath.replace(/\.md$/, '').split(path.sep);
    
    let title = path.basename(file, '.md');
    if (slug.length > 1) {
      title = slug[slug.length - 2];
    }
    
    // Read the file to extract the first H1 tag for the subtitle
    const content = fs.readFileSync(file, 'utf8');
    const h1Match = content.match(/^#\s+(.*)$/m);
    const subtitle = h1Match ? h1Match[1].trim() : title;
    
    return {
      slug,
      title,
      subtitle,
      fullPath: file
    };
  });
}

export function getLectureBySlug(slugArray) {
  const decodedSlug = slugArray.map(s => decodeURIComponent(s));
  const courseInfo = getActiveCourseInfo();
  if (!courseInfo) return null;
  
  const lecturesDir = path.join(process.cwd(), 'public', 'courses', courseInfo.folderName, 'lecture');
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
  const courseInfo = getActiveCourseInfo();
  if (!courseInfo) return [];
  const questionsDir = path.join(process.cwd(), 'public', 'courses', courseInfo.folderName, 'questions');
  if (!fs.existsSync(questionsDir)) return [];
  
  const files = getAllMarkdownFiles(questionsDir);
  
  return files.map(file => {
    const relativePath = path.relative(questionsDir, file);
    const slug = relativePath.replace(/\.md$/, '').split(path.sep);
    
    let title = path.basename(file, '.md');
    if (slug.length > 1) {
      title = slug[slug.length - 2];
    }
    
    // Read the file to extract the first H1 tag for the subtitle
    const content = fs.readFileSync(file, 'utf8');
    const h1Match = content.match(/^#\s+(.*)$/m);
    const subtitle = h1Match ? h1Match[1].trim() : title;
    
    return {
      slug,
      title,
      subtitle,
      fullPath: file
    };
  });
}

export function getQuestionBySlug(slugArray) {
  const decodedSlug = slugArray.map(s => decodeURIComponent(s));
  const courseInfo = getActiveCourseInfo();
  if (!courseInfo) return null;
  
  const questionsDir = path.join(process.cwd(), 'public', 'courses', courseInfo.folderName, 'questions');
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

export function getExtraBySlug(slugArray) {
  const decodedSlug = slugArray.map(s => decodeURIComponent(s));
  const courseInfo = getActiveCourseInfo();
  if (!courseInfo) return null;
  
  const extrasDir = path.join(process.cwd(), 'public', 'courses', courseInfo.folderName, 'extras');
  const filePath = path.join(extrasDir, ...decodedSlug) + '.md';
  
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
