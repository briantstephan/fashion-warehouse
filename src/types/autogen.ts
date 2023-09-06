export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface ImageType {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText: string;
}

export interface ComplexImageType {
  image: ImageType;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface BlogType {
  name: string;
  slug: string;
  datePosted: string;
  primaryPhoto: ComplexImageType;
  blogStarter_body: any;
  blogStarter_blogAuthor: string;
  blogStarter_description: string;
  blogStarter_metaDescription: string;
  blogStarter_keywords: string;
}

export interface BlogStarter_featuredBlogs {
  id?: string;
  name?: string;
  slug?: string;
  primaryPhoto?: ComplexImageType;
  blogStarter_description?: string;
  datePosted?: string;
}

export interface Home {
  id: string;
  name: string;
  blogStarter_coverPhoto: ComplexImageType;
  blogStarter_heading: string;
  blogStarter_subHeading: string;
  slug: string;
  blogStarter_featuredBlogs: BlogStarter_featuredBlogs[];
}
