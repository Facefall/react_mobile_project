// import React from "react";
//
// import { Carousel, WhiteSpace, WingBlank,Pagination,Icon } from 'antd-mobile';
// import "./index.scss";
//
// const locale = {
//     prevText: 'Prev',
//     nextText: 'Next',
// };
// const pagination = () => (
//     <div className="pagination-container" >
//         <p className="sub-title">Button with text</p>
//         <Pagination total={5} current={1} locale={locale} />
//
//         <p className="sub-title">Button with text and icon</p>
//         <Pagination total={5}
//                     className="custom-pagination-with-icon"
//                     current={1}
//                     locale={{
//                         prevText: (<span className="arrow-align"><Icon type="left" />上一步</span>),
//                         nextText: (<span className="arrow-align">下一步<Icon type="right" /></span>),
//                     }}
//         />
//
//         <p className="sub-title">Hide number</p>
//         <Pagination simple total={5} current={1} locale={locale} />
//
//         <p className="sub-title">Show number only</p>
//         <Pagination mode="number" total={5} current={3} />
//
//         <p className="sub-title">Point style</p>
//         <Pagination mode="pointer" total={5} current={2} style={{ marginBottom: '16px' }} />
//     </div>
// );
//
//
// class Index extends React.Component {
//     state = {
//         data: [2,3,4,5,6,7,8,1],
//         imgHeight: '8.75rem',
//         slideIndex: 7,
//     };
//
//     componentDidMount() {
//         // simulate img loading
//         setTimeout(() => {
//             this.setState({
//                 // data: ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
//             });
//         }, 100);
//     }
//     componentDidUpdate() {
//         // After the new child element is rendered, change the slideIndex
//         // https://github.com/FormidableLabs/nuka-carousel/issues/327
//         if (this.state.slideIndex !== this.state.data.length - 1) {
//             /* eslint react/no-did-update-set-state: 0 */
//             this.setState({ slideIndex: this.state.data.length - 1 });
//         }
//     }
//     render() {
//         return (
//             <WingBlank>
//                 {/*<Button*/}
//                 {/*onClick={() => {*/}
//                 {/*this.setState({*/}
//                 {/*data: this.state.data.concat('AiyWuByWklrrUDlFignR'),*/}
//                 {/*});*/}
//                 {/*}}*/}
//                 {/*>Click me to add child</Button>*/}
//                 <WhiteSpace />
//                 <Carousel
//                     autoplay={false}
//                     infinite
//                     selectedIndex={this.state.slideIndex}
//                     beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
//                     afterChange={index => console.log('slide to', index)}
//                 >
//                     {this.state.data.map((val, index) => (
//                         <a
//                             key={val + index}
//                             href="javascript;;"
//                             style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
//                         >
//                             <img
//                                 src={require(`../../../img/mixa-i-${val}.jpg`)}
//                                 // src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
//                                 alt=""
//                                 style={{ width: '100%', verticalAlign: 'top' }}
//                                 onLoad={() => {
//                                     // fire window resize event to change height
//                                     window.dispatchEvent(new Event('resize'));
//                                     this.setState({ imgHeight: 'auto' });
//                                 }}
//                             />
//                         </a>
//                     ))}
//                 </Carousel>
//                 {pagination()}
//             </WingBlank>
//         );
//     }
// }
//
// export default Index;