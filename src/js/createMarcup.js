export async function createMarcup(results) {
    const { hits } = results;
    markupData.markup = hits.map((hit) =>
            `<a href="${hit.largeImageURL}"><div class="photo-card">
            <img src="${hit.webformatURL}" alt="${hit.tags}" loading="lazy"
              class="img-item" />
            <div class="info">
        <p class="info-item">
          <b>Likes:</b>${hit.likes}
        </p>
        <p class="info-item">
          <b>Views:</b>${hit.views}
        </p>
        <p class="info-item">
          <b>Comments:</b>${hit.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b>${hit.downloads}
        </p>
      </div>
    </div></a>`).join("");
        return markupData.markup;
    };