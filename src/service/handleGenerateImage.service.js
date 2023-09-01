class handleGenerateImage {
  API_TOKEN = "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";

  async postGenerateImage(images, valueInput, lengthRequest) {
    for (let i = 0; i < lengthRequest; i++) {
      const prompt = `${valueInput}`;
      this.generateImageFunction(prompt, images);
    }
  }
  async generateImageFunction(prompt, images) {
    try {
      const response = await fetch(
        "https://api-inference.huggingface.co/models/runwayml/stable-diffusion-v1-5",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${this.API_TOKEN}`,
          },
          body: JSON.stringify({ inputs: prompt }),
        }
      );
      const blob = await response.blob();
      images.push(URL.createObjectURL(blob));
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new handleGenerateImage();
