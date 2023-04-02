"use client";
import Image from 'next/image';
import { RevealWrapper } from 'next-reveal';

export default function HeroSection() {
    return (
        <div>
            <div className="text-center pt-[150px] md:rounded-b-[250px] pb-[100px] rounded-b-[150px] bg-cover bg-fixed bg-[url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAQDw8PEBAPDw8NDQ0NDw8QDw8NDw8NFREWFhURFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGi0lHR0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLS0rLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKABPAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAABAgMEAAUG/8QAMRAAAgECBQEGBgICAwAAAAAAAAECAxEEITFBUWESE3GBkaEFFCKx4fAy0VLxFULB/8QAGgEAAwEBAQEAAAAAAAAAAAAAAAECAwQGBf/EACERAQEAAgEFAQADAAAAAAAAAAABAhEDEhMhMVFBBBRx/9oADAMBAAIRAxEAPwDyEggQ0Vc908LXIZIeFGTL08LyNnlnIzxRopYdvoa6VBLY006RFzkY5cnxno4ZI2U6RanQ5Lxgkc+XIxuScKZVI66A5mVtqTJINyfaMmIx6jlHN8hMbTk22VKqirydjzMT8Qcso/SudzLUqOTu3f8A8AkdGHFJ7XMdAFIZIZI1FpYxNdOJKlHM1JGedRatRRoTM9PQZzOfKboX7Y8ZmVTS3G7V916k3Eml10vwL81wvVklDqhlS6i6cQf5qXCO+Zl09BO6O7thrEeFViZdPQ51m+PQj2WdYOmDQ1G+noZasG9l6I1JgaKl0Hl1KUtnbyRlqUp8v1se3KmQnSN8eVcy08OdN7pkmj25USM6C4NZnGk5HkNCtHpywq4JSwiKmUXOSPPaAbnhF1FeEXUra+5iwsBvWDGWDXAtn3cTxwa4LQwvQ1KshlXMrnk5rlajDCPg0QwnLB3we/ItyT5WjRiupRNIyOuI8QuSOi1Om51BHUMTxIO9b6Lkc4z6dNkqpOpXUc2/IwVMUl/HN87Gdybd3mXONUxaMRjJSyWS4IJHJDpGkknpXpyQ6RyQ6QItBIZIKQ6QtpNSRW4qOM6R1PIXNgSGuIHSQe2iTYthaC3fLqMsWl/l7GZoVofRKG+ONhu2vItCtB6SR5DQjQuzKHugueLGtKOkn9y8PiMl/JJoi8Nh6ekwWRljjoPX6X1LKaejTI6bPY1pSwGiTmDvB6paUdNCOihXVB3pUlPy54dciPCrkLrCusVOo/IPDLkHcxElXIVMUluXJlTkrS4xWwrmuh59TG8ZmaWKkXMGk48klVlyx1XlyRQyNm9kWVeXIVVlyycUVhEEWSCm3uysI/vUTvFHq+FmI6rfRaZZPzfkRaJja0ynGPV7JbeZCpWctdOFoTuFBIXTIZIdIVDoaKZIdICQ6QmdopFEgRQ6RNqHJDJBSGsZ2nJty/PltYPZGSDYkWlsdYexwbSSwLFAWDYTaA0UaFaK2E2hGirQrQ9nEWhGizX7b95YskPe2k8ISQqk1o2ikickaCVWONmtc/EdY1PW690ZGIxdMV0yvRVW+kk/uJKpI85hjWktG/uHSfba5VZEZVJcifMvdJ+wPmIvZr0ZUhzCz8Ccm9WybX5K9uPPsCye/XqFrXHwlb96iMtJE7DitlQ6RLtAGelu8S0zOdRv8E0ERakPFDXEQ6ForTIZCoogZ0yHQiKREzpolIixRSKFWVMkOkKikURaQpDxQqHijOjYoNjkhkhEFg2DYItkSwLDnWDYTFaKNCjCbEa8irQjKVKSSJSKsSSLh7SkibKsnJFqiTEZSQjG0ibEZSQjG0hGKOxGNcCwJM5gYtL2COu+px1xmCCjkECEIAgVOhkKhkCKZFEIh0JnTopFCRRWImeR4lEJEpEmsjxQyFQ6M6BQ4sR0TSMggQyRFJyQQnCMLAGAwBWKxxGVARiMoxGVAmxGUkTkaQ05E2UkTkWcTkhGUkTkNrE2IyjEY2kIxGOxWNpCsVjMUFABhAwN6LqQn/OOf+Syl+fMlPBPWElLo/pl/RmjItCrYWvjPpyx9JTg4uzTT6qxxujiLqzzXDzA6UJbW8Bp7n2MqGRd4R7P1B8u0IXOEiisUcoPgZIEWmiPERIpFCZ06KInEokRUHQ6EiOiKkyHQqHgr5Iig8VfJDvhf7Y0l2Fb/s9eiJIj2DIIEECAAQMDARjsRjgKxGMxWXASRORRk2XDTkTkUkTkaQ4SRNjyEkNrCMmyjEkNpCMVjMRjXCsDNFDCynosuT1MLgIQzf1S9kTllIWXJMXm4X4fOef8Vyz1Kfw2klZq751NiQ1jDLktYZclr510KfMvVf0cqUOvqVq0GjPJM6W0u/1VRiikZoyXO7QC4bb1UG7wwxmOpi0i8bX2gmZTKRkGkXFYKJplIkppkUihUMiKk6GQiNmHwrepnlZPZEpU3J5GxpU1zJ6DzlGmuuxgnUbd2Zec/wDCNe+b3OFuG5egYNxbnXEDXOuC4rYaAtiMLYjZUgCQrCxJMqAGTYzYki4ZJCMZiSZapCSJsdk2NrCsRsZlqeG3ll03GvciEKbk7JX+xroYNLX6n7ItTjfJKy6GulSsRlnpnlyW+nU4F4wDCAZM57ltlsG7E2FyRN1QkONM8BfTPpozBXwPKsfSxtwijhF5NGGP8jLFEzr4mpgiEsMz7ap8Mg9MjJV+ErlnRj/LxvtrOax8j3LCqbPo5/CevsRfwt869Nv1mn9jD6ucu3jRgUjE9T/jHz7HL4b1Y+9j9Tlntgih0j0I/D11L08GtkTebFG3mRg3omaaWEb1PThheciv0xMMuf4nbPh8GkPXxEYLL8kMVjrZLN/Y8+U23d5sWPHcvOQVqVHJ3YtxEw3NtaHs6l4BUiaf71f+xhHZo6YbidoFw0k9wXFuC49AzYrZ1xWxyBzYrZzYjZUhg2JJhf77/wBD91bOWXC3f9D2uT6i0TkPUnfw4JNlw5CsEYN6euw8ad83p9x3Kw1b+OjFR015Ggu0yau3ZG/D0rIWV1E09GkaYQOhESrWtkjmtuVQec0jPUqkalUxV8Txr+/0XjgvDDbTVxCRDvW81ZLa7tfqZYLtZvRfthpVDbHGRrcdPtkx0yKZSKPk2ONWMiqlcikOkRRAnC/mrom6XQvHLga5MtXuMjh0B3aNMkRnE0mSSdlIWVRIjWclormOrKW7t5pGuOGzkaa+LS3POr4qUui9wSUeV6piOceb+CZ04YSK0SwTnVWy9RXUfga6oOd+8/uxO4yYrD9KJ20/ILihuGk3ya51xbguGiNc64jZ1x6BrgbOSb0Vy1PCyeuQrZPYZmx6dCUtrLU3KhCCvL31MeIxl8o5Lndk9Vy8YqgzcYZK0pc8GSrUbYJSJtmuOGlg2GMd36HJWzA2WBlIm2Fsphqd34fcfo/TRhKPqz0KcCdGB2IrWyRzZW5VF8ur1tkYqtWwlatY8+rVcvA1ww0vDDalbEXyWmfmRir/AL7iOQyfuaadUkxnhSc8rLRBpU+0r9SDkelhKf0L1Hbpnl4j6KNXlnPFcZ+J5sa7eq9GaIVY8P1OC8evbk6Wj5iT3t4ZHKb5fqzoTg9iqUeDO6n4VKpdR1IZQR3dom2EaMwuzF7AVFk+ASVIhUw64NZw5lYby6mCXFvAhLBvZnsuAkqRrOant4rw0kL3bWzPYdIR0jScx7eRZ8M49V0gdyV3YHl3Dc9PuOgyw3QO7CeXZvZjRoyex60cMUVBIm88DyoYR7minglxc3PsozYjGxjv5Ijrzy9A6oqOpnxGNjHKObMNfGSl0RmbNceH9yPSlas5O7f9EmwNiNnRJpUgtg0A3bxFbKVozYrYLguCpBPTwtKyRhwkLyvsvuetTyVzLky/EZ/BqT7K6nmYivuUxVc8ypPtMfHhryeGGwqTcmTbCxGzV0yOQXIUA1aE9yhH6UeJDVeK+579FZIz5PTHl/H/2Q==')]">
                <p className="text-2xl font-bold mb-2">Earn as you Learn Program</p>
                <h1 className="md:text-6xl text-4xl md:px-10 font-extrabold">
                    Prepare yourself for the Next Generation of Internet with Panaverse
                </h1>
                <p className="text-lg md:px-64 mt-4 font-medium ">
                    One Year Panaverse DAO Earn as you Learn Program. Consolidating Web
                    3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient
                    Computing/IoT Technologies
                </p>
                <button className="mt-4 bg-blue-600 rounded-lg hover:bg-blue-800 text-white px-7 py-3 font-bold" title='click to visit'>
                    More info
                </button>
            </div>

            {/* Logo Section */}
            <div className="md:flex md:flex-row flex flex-col justify-center gap-[60px] shadow-2xl w-[60%] md:justify-around items-center mx-auto py-16 -mt-[80px] bg-white rounded-3xl">
                <div>
                    <Image
                        src="/Logo.webp"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        src="/logo.svg"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </div>
                <div>
                    <Image
                        src="/saylani.png"
                        alt="logo"
                        width={150}
                        height={150}
                    />
                </div>
            </div>

            {/* Program of Studies */}
            <div className='md:flex mt-[50px]'>
                <div className='basis-[50%]'>
                    <RevealWrapper
                        origin="left"
                        delay={200}
                        duration={2000}
                        distance="500px"
                        reset={true}
                    >
                        <Image
                            src="/logo2.webp"
                            alt="logo"
                            height={400}
                            width={400}
                            className="md:mx-auto pr-8"
                        />
                    </RevealWrapper>
                </div>

                <div className='basis-[50%] text-center md:text-left'>
                    <h1 className='text-4xl font-bold pt-10 md:ml-[11px]'>Program Of Studies</h1>
                    <p className='pt-4 md:pr-[150px] px-3 md:text-justify'>
                        This curriculum is intended for beginners who want to learn software
                        development from the ground up. It is going to be a
                        fifteen-month-long hybrid program that includes both onsite and
                        online classes and is divided into five quarters of 13 weeks each.
                        The emphasis will be on hands-on learning by educating students to
                        produce projects.
                    </p>
                    <button className="mt-4 bg-blue-600 rounded-lg hover:bg-blue-800 text-white px-5 md:ml-3 py-3 font-bold" title='click to visit'>
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
}
