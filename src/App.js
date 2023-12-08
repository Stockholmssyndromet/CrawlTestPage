import { FaAngleRight } from "react-icons/fa6";
import Aside from "./components/Aside";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className=" w-full h-fit flex ">
      <Header />
      <Aside />
      <div className="w-full h-full py-8 bg-blue-100 pt-24 px-8 gap-4 flex flex-wrap justify-between ml-56">
        <div className="flex w-full gap-4">
          <div className="w-full h-80 bg-white rounded-lg flex items-center justify-between py-4">
            <div className="flex flex-col justify-between h-full py-2 px-5">
              <span className="font-semibold text-2xl">
                6명 중 1명의 판매자가
                <br />
                <span className="text-blue-600">
                  10배 이상의 매출
                </span> 성장을 <br />
                경험하고 있습니다!
              </span>
              <button className="font-semibold bg-blue-600 rounded-md py-2 px-4 text-white">
                지금 매출 10배 올리기
              </button>
            </div>

            <img
              src="https://wing.coupang.com/resources/20231206121830/rfm-portal/image/onboarding/image.gif"
              alt=""
              className="h-full py-8"
            />
          </div>
          <div className="w-full h-80 flex flex-col gap-4">
            <div className="w-full h-full bg-white rounded-lg py-4 px-5 flex flex-col justify-between">
              <span className="font-semibold text-lg">
                판매자님, 유용한 판매자 혜택정보를 놓치고 있어요!
              </span>
              <span className="text-sm text-[#aaa]">
                지금 바로 수신동의 상태를 '동의'로 변경하시면
                <br />
                판매자님을 위한 유용한 판매 정보를 놓치지 않도록 알려드려요.
              </span>
              <button className="w-fit font-semibold border-[1px] border-solid border-blue-600 py-2 px-4 text-blue-600 rounded-md">
                지금 변경하러 가기
              </button>
            </div>
            <div className="w-full h-full bg-white rounded-lg py-4 px-5 flex flex-col justify-between">
              <span className="font-semibold text-lg ">
                <span className="text-blue-700">
                  내 상품 랭킹을 올리고 싶으신가요?
                </span>
                <br />
                광고로 상품을 더 노출하고 쿠팡 랭킹 상승을 경험해보세요!
              </span>
              <span className="text-sm">
                첫 광고 지원금{" "}
                <span className="font-semibold text-blue-700">5만원</span>을
                받아보세요
              </span>
              <button className="w-fit font-semibold border-[1px] border-solid border-blue-600 py-2 px-4 text-blue-600 rounded-md">
                지금 변경하러 가기
              </button>
            </div>
          </div>
        </div>
        <div className=" w-full h-60 flex items-center gap-4">
          <div className="py-4 bg-white w-full h-full rounded-lg flex flex-col">
            <div className="flex flex-col h-full px-5">
              <span className="font-semibold text-lg">판매/배송</span>
              <span className="font-regular text-sm text-[#aaa]">
                최근 14일 기준
              </span>
              <div className="w-full h-full flex items-center justify-center gap-3">
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="font-semibold text-2xl">0</span>
                  <span className="text-sm text-[#aaa]">결제완료</span>
                </div>
                <FaAngleRight />
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="font-semibold text-2xl">0</span>
                  <span className="text-sm text-[#aaa]">상품준비중</span>
                </div>
                <FaAngleRight />
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="font-semibold text-2xl">0</span>
                  <span className="text-sm text-[#aaa]">배송지시</span>
                </div>
                <FaAngleRight />
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="font-semibold text-2xl">0</span>
                  <span className="text-sm text-[#aaa]">배송중</span>
                </div>
                <FaAngleRight />
                <div className="flex flex-col gap-1 justify-center items-center">
                  <span className="font-semibold text-2xl">0</span>
                  <span className="text-sm text-[#aaa]">배송완료</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-lg flex flex-col">
            <span className="font-semibold text-lg py-4 px-5">가격관리</span>
            <div className="py-4 w-full h-full flex gap-4 justify-center items-center">
              <div className="flex flex-col text-right">
                <span className="text-sm text-[#333]">
                  현재 아이템위너 아닌
                  <br />
                  상품
                </span>
                <span className="font-semibold text-2xl">0개</span>
              </div>
              <div className="w-[1px] h-4/6 bg-[#ccc]" />
              <div className="flex flex-col gap-3">
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>현재 자동가격조정중인 상품수</span>
                  <span className="font-semibold text-xl ml-32">0 개</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>최근 7일 자동조정을 통한 추가매출 </span>
                  <span className="font-semibold text-xl ml-32">0 원</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>최근 7일 자동조정을 통한 추가판매수 </span>
                  <span className="font-semibold text-xl ml-32">+0 개</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-60 flex gap-4 items-center">
          <div className="w-full h-full flex items-center gap-4 rounded-lg justify-between ">
            <div className="w-full h-full bg-white rounded-lg flex flex-col px-5 py-3">
              <span className="font-semibold text-lg">취소/반품/교환</span>
              <span className="text-sm text-[#aaa]">최근 30일 기준</span>
              <div className="w-full flex flex-col gap-3 mt-auto mb-4">
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>출고중지요청</span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>반품접수 </span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>교환접수 </span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
              </div>
            </div>
            <div className="w-full h-full bg-white rounded-lg flex flex-col px-5 py-3">
              <span className="font-semibold text-lg">미답변 문의</span>
              <span className="text-sm text-[#aaa]">최근 30일 기준</span>
              <div className="w-full flex flex-col gap-3 mt-auto mb-10">
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>고객센터문의</span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>고객문의 </span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
            <img src="/ddddddd.png" alt="" className="w-[96%] h-fit" />
          </div>
        </div>
        <div className="w-full h-60 flex items-center gap-4 rounded-lg">
          <div className="w-full h-full flex items-center gap-4 rounded-lg justify-between ">
            <div className="w-full h-full bg-white rounded-lg flex flex-col px-5 py-3">
              <span className="font-semibold text-lg">정산</span>
              <div className="flex flex-col text-right mt-auto mb-4">
                <span className="text-xl text-black font-semibold">0원</span>
                <span className="text-sm text-[#aaa]">
                  지급 예정 금액이 없습니다.
                </span>
              </div>
            </div>
            <div className="w-full h-full bg-white rounded-lg flex flex-col px-5 py-3">
              <span className="font-semibold text-lg">상품 관리</span>
              <div className="w-full flex flex-col gap-1 mt-auto mb-2">
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>판매중 상품수</span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>임시저장 상품수 </span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>승인반려 상품수</span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
                <div className=" text-sm text-[#333] flex justify-between items-center">
                  <span>품절 상품수 </span>
                  <span className="font-semibold text-xl ml-24">0</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full bg-white rounded-lg py-3 flex flex-col">
            <span className="px-5  font-semibold text-lg">판매자가이드</span>
            <div className="w-full h-full flex items-center justify-between px-8">
              <img
                className="h-32"
                src="https://img1a.coupangcdn.com/image/static/wing/seller_guide/pc/thum-seller-guide-35.png"
                alt=""
              />
              <div className="flex flex-col justify-between h-28">
                <span className="text-md font-bold">
                  판매자
                  <br />
                  자동가격조정
                </span>
                <span className="text-sm text-[#aaa]">
                  아이템위너 기회를 높여주는 똑똑한
                  <br />
                  판매자 자동가격조정을 알아보세요
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
