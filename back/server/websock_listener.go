package server

import (
	"log"
	"net/http"
	//	"log"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	CheckOrigin: func(r *http.Request) bool {
		return true // 모든 연결 허용 (보안상 필요하면 도메인 체크 추가)
	},
}

func echoHandler(w http.ResponseWriter, r *http.Request) {
	// HTTP 연결을 WebSocket으로 업그레이드
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println("WebSocket 업그레이드 실패:", err)
		return
	}
	defer conn.Close()

	log.Println("클라이언트 연결됨")

	for {
		// 클라이언트 메시지 읽기
		_, msg, err := conn.ReadMessage()
		if err != nil {
			log.Println("메시지 읽기 오류:", err)
			break
		}

		log.Printf("받은 메시지: %s\n", msg)

		// 클라이언트에게 메시지 그대로 반환 (에코)
		err = conn.WriteMessage(websocket.TextMessage, msg)
		if err != nil {
			log.Println("메시지 전송 오류:", err)
			break
		}
	}
}
