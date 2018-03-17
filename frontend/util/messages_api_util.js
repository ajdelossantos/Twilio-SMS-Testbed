export const fetchMessages = () =>
  $.ajax({
    method: "GET",
    url: "api/messages"
  });


export const fetchMessage = id =>
  $.ajax({
    method: "GET",
    url: `api/messages/${id}`
  });

export const deleteMessage = id =>
  $.ajax({
    method: "DELETE",
    url: `api/messages/${id}`
  });