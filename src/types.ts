export interface CV {
  basics: {
    name: string
    label: string
    image: string
    email: string
    phone: string
    title: string
    summary: string
    location: {
      postalCode: string
      city: string
      countryCode: string
      country: string
    }
    profiles: Array<Profiles>
  }
  work: {
    title: string
    works: Array<Work>
  }
  education: {
    title: string
    titles: Array<Title>
  }
  skills: {
    title: string
    skill: Array<string>
  }
  languages: {
    title: string
    languages: Array<{
      language: string
      fluency: string
    }>
  }
  projects: {
    title: string
    project: Array<Project>
  }
  commands: {
    title: string
    text1: string
    text2: string
    print: string
    actions: string
  }
}

interface Profiles {
  network: string
  username: string
  url: string
}

interface Work {
  name: string
  position: string
  startDate: string
  endDate: string | null
  summary: string
  url: string
  highlight: string
}

interface Title {
  institution: string
  area: string
  studyType: string
  startDate: string
  endDate: string
}

interface Project {
  name: string
  description: string
  url: string
  highlights: Array<string>
}
